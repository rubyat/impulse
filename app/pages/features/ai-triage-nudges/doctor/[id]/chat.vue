<template>
  <div class="min-h-[calc(100vh-70px)] sm:min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink :to="`/features/ai-triage-nudges/doctor/${doctor?.id}`" class="text-sm text-indigo-600">← Profile</NuxtLink>
        <div class="text-base font-semibold">Chat: {{ doctor?.name || 'Doctor' }}</div>
        <NuxtLink to="/features/ai-triage-nudges/televisit" class="text-sm text-emerald-600">Video</NuxtLink>
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-3 text-sm">
      <div v-if="doctor" class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-xs">
        You are chatting with {{ doctor.name }}. For emergencies, call 999. For non‑urgent phone advice, call 16263.
      </div>

      <div v-for="m in messages" :key="m.id" :class="m.role === 'user' ? 'flex justify-end' : 'flex justify-start'">
        <div
          class="max-w-[75%] p-3"
          :class="m.role === 'user' ? 'rounded-2xl rounded-br-sm bg-indigo-600 text-white' : 'rounded-2xl rounded-bl-sm bg-white border text-slate-900'"
        >
          <div class="whitespace-pre-line">{{ m.text }}</div>
          <div
            class="mt-1 text-[10px] opacity-60"
            :class="m.role === 'user' ? 'text-right opacity-80' : ''"
          >
            {{ m.time }}
          </div>
        </div>
      </div>

      <div v-if="isTyping" class="flex justify-start">
        <div class="max-w-[60%] rounded-2xl rounded-bl-sm bg-white border p-3 text-slate-500">
          {{ doctor?.name?.split(' ')[0] || 'Doctor' }} is typing…
          <div class="mt-1 text-[10px] opacity-60">{{ nowTime }}</div>
        </div>
      </div>

      <div ref="endMarker" />
    </main>

    <!-- Bottom input -->
    <div class="absolute bottom-[65px] left-0 w-full bg-white border px-4">
      <div class="py-2 flex items-center gap-2">
        <input
          v-model="newMessage"
          @keydown.enter.prevent="sendMessage"
          placeholder="Type your message..."
          class="flex-1 h-10 px-4 rounded-full border "
          aria-label="Type your message"
        />
        <button
          @click="sendMessage"
          :disabled="!canSend"
          class="px-3 py-2 rounded-lg text-white"
          :class="canSend ? 'bg-indigo-600' : 'bg-indigo-300 cursor-not-allowed'"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Doctor {
  id: string
  name: string
}

type MessageRole = 'user' | 'doctor'

interface ChatMessage {
  id: string
  role: MessageRole
  text: string
  time: string
}

const route = useRoute()
const doctorId = computed(() => String(route.params.id))
const { data } = await useFetch<Doctor[]>(() => '/data/doctors.json', { default: () => [] })
const doctor = computed(() => data.value.find((d) => d.id === doctorId.value))

const messages = ref<ChatMessage[]>([])
const newMessage = ref<string>('')
const isTyping = ref<boolean>(false)
const endMarker = ref<HTMLElement | null>(null)
const nowTime = computed(() => getTimeInDhaka())
const canSend = computed(() => newMessage.value.trim().length > 0 && !isTyping.value)

onMounted(() => {
  pushDoctor(
    `Assalamu Alaikum, I am ${doctor.value?.name || 'your doctor'}. Please tell me your main concern. This chat does not replace emergency care. If severe, call 999.`
  )
})

function getTimeInDhaka(date: Date = new Date()): string {
  try {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Dhaka'
    })
  } catch {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
  }
}

function pushUser(text: string) {
  messages.value.push({ id: cryptoRandomId(), role: 'user', text, time: getTimeInDhaka() })
  nextTick(scrollToEnd)
}

function pushDoctor(text: string) {
  messages.value.push({ id: cryptoRandomId(), role: 'doctor', text, time: getTimeInDhaka() })
  nextTick(scrollToEnd)
}

function scrollToEnd() {
  endMarker.value?.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function cryptoRandomId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const buffer = new Uint32Array(4)
    crypto.getRandomValues(buffer)
    return Array.from(buffer)
      .map((n) => n.toString(16).padStart(8, '0'))
      .join('-')
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

async function sendMessage() {
  if (!canSend.value) return
  const text = newMessage.value.trim()
  newMessage.value = ''
  pushUser(text)

  isTyping.value = true
  await wait(600 + Math.random() * 700)
  const reply = generateDoctorReply(text)
  pushDoctor(reply)
  isTyping.value = false
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function generateDoctorReply(input: string): string {
  const text = input.toLowerCase()
  const footer =
    '\n\nIf danger signs appear, go to the nearest Upazila Health Complex or call 999. For non‑urgent phone advice, call 16263.'

  if (/(fever|temperature|jhor|jor)/.test(text)) {
    return (
      'Please monitor your temperature and hydrate well. Consider dengue test during monsoon if fever with headache/body pain.' +
      footer
    )
  }
  if (/(cough|cold|sore throat|khansi)/.test(text)) {
    return 'Warm fluids, steam, rest. If >2 weeks or with weight loss/night sweats, TB screening is advised.' + footer
  }
  if (/(chest pain|severe chest|pressure in chest|heart attack)/.test(text)) {
    return 'Heavy/pressure-like chest pain with breathlessness/sweating → call 999 immediately. Otherwise, we can assess over video today.' + footer
  }

  return 'Thanks. How long has this been going on? Any fever, breathing trouble, chest pain, or severe weakness?' + footer
}
</script>


