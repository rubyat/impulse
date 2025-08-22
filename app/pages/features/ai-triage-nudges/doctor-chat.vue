<template>
  <div class="min-h-[calc(100vh-70px)] sm:min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">Duty doctor chat</div>
        <div class="w-14" />
      </div>
    </div>

    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-3 text-sm">
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-xs">
        You are connected to the on-call clinician. Please share your primary symptoms. Avoid sharing personal IDs or payment details here.
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
          Doctor is typing…
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
        <NuxtLink to="/features/ai-triage-nudges/televisit" class="px-3 py-2 rounded-lg bg-emerald-500 text-white">Video</NuxtLink>
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
type MessageRole = 'user' | 'doctor'

interface ChatMessage {
  id: string
  role: MessageRole
  text: string
  time: string
}

const messages = ref<ChatMessage[]>([])
const newMessage = ref<string>('')
const isTyping = ref<boolean>(false)
const endMarker = ref<HTMLElement | null>(null)

const nowTime = computed(() => getTimeInDhaka())
const canSend = computed(() => newMessage.value.trim().length > 0 && !isTyping.value)

onMounted(() => {
  pushDoctor(
    'Assalamu Alaikum, I\'m Dr. Khan (on duty). I\'ll ask a few questions to guide you. This chat is not a diagnosis.\n\n' +
      'If you have severe chest pain, trouble breathing, or fainting, please call 999 now. For non‑urgent advice by phone, Shasthyo Batayon is 16263.'
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
    '\n\nIf you develop danger signs, go to your nearest Upazila Health Complex or call 999. For non‑urgent phone advice, call 16263.'

  if (/(chest pain|severe chest|pressure in chest|heart attack)/.test(text)) {
    return (
      'Chest pain can be serious.\n\n' +
      'Immediate steps:\n' +
      '• Stop activity, rest.\n' +
      '• If heavy/pressure-like pain, radiation, sweating, nausea, or breathlessness → call 999 now.\n' +
      '• Otherwise, let\'s arrange a tele‑visit today to evaluate further.' +
      footer
    )
  }

  if (/(fever|temperature|jhor|jor)/.test(text)) {
    return (
      'Fever: please check temperature and hydration.\n\n' +
      '• Use Paracetamol 500 mg every 6–8 h if needed (avoid if allergic/liver disease).\n' +
      '• Consider dengue test if fever with headache/body pain during monsoon.\n' +
      '• Red flags: >102°F for 3+ days, confusion, breathing difficulty.' +
      footer
    )
  }

  if (/(cough|cold|sore throat|khansi)/.test(text)) {
    return (
      'Cough/sore throat:\n\n' +
      '• Warm fluids, steam inhalation, rest.\n' +
      '• If >2 weeks with weight loss/night sweats → TB screening at DOTS center.\n' +
      '• Breathlessness, high fever → urgent review.' +
      footer
    )
  }

  if (/(diarrhea|loose motion|pani jhora)/.test(text)) {
    return (
      'Diarrhea care:\n\n' +
      '• ORS after each loose stool; zinc for children if applicable.\n' +
      '• Watch for dehydration: low urine, lethargy, blood in stool.' +
      footer
    )
  }

  if (/(bp|blood pressure|hypertension|pressure)/.test(text)) {
    return (
      'Blood pressure:\n\n' +
      '• Low-salt diet, daily walk, regular medication.\n' +
      '• If ≥160/100 with headache/blurred vision/chest pain → urgent care.\n' +
      '• Keep a morning/evening BP log.' +
      footer
    )
  }

  if (/(diabetes|sugar)/.test(text)) {
    return (
      'Diabetes:\n\n' +
      '• Monitor fasting sugar; balanced meals (½ veg, ¼ protein, ¼ carbs).\n' +
      '• Seek care for dizziness, very high sugars, vomiting.' +
      footer
    )
  }

  if (/(pregnant|pregnancy|garbhoboti)/.test(text)) {
    return (
      'Pregnancy:\n\n' +
      '• Continue folic acid; attend ANC at nearest facility.\n' +
      '• Danger signs: bleeding, severe headache/blurred vision, reduced movements.' +
      footer
    )
  }

  if (/(child|baby|shishu|kids)/.test(text)) {
    return (
      'Child health:\n\n' +
      '• Follow EPI vaccines; monitor growth.\n' +
      '• For fever/diarrhea: hydration, ORS; zinc for children >6 months.' +
      footer
    )
  }

  return (
    'Thanks for the details. To assess better:\n' +
    '• How long have you had this issue?\n' +
    '• Any fever, chest pain, breathing trouble, or severe weakness?\n' +
    '• Any chronic conditions (BP, diabetes, asthma, pregnancy)?\n\n' +
    'We can shift to a quick video call if needed.' +
    footer
  )
}
</script>


