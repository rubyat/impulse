<template>
  <div class="min-h-[calc(100vh-70px)] sm:min-h-screen bg-slate-50 safe-top safe-bottom">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 bg-white border-b">
      <div class="mx-auto max-w-sm h-14 flex items-center justify-between ">
        <NuxtLink to="/features/ai-triage-nudges" class="text-sm text-indigo-600">← Back</NuxtLink>
        <div class="text-base font-semibold">AI symptom chat</div>
        <NuxtLink to="/features/ai-triage-nudges/patterns" class="text-sm text-indigo-600">Patterns</NuxtLink>
      </div>
    </div>
    <main class="mx-auto max-w-sm pt-4 pb-24  space-y-3 text-sm" ref="chatContainer">
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
          AI is typing…
          <div class="mt-1 text-[10px] opacity-60">{{ nowTime }}</div>
        </div>
      </div>

      <NuxtLink to="/features/ai-triage-nudges/televisit" class="text-xs underline text-slate-600">Quick action: Book tele-visit →</NuxtLink>

      <div ref="endMarker" />
    </main>
    <!-- Bottom input -->
    <div class="absolute bottom-[65px] left-0 w-full bg-white border px-4">
      <div class="py-2 flex items-center gap-2">
        <input
          v-model="newMessage"
          @keydown.enter.prevent="sendMessage"
          placeholder="Describe your symptoms..."
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
type MessageRole = 'user' | 'bot'

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
  // Seed greeting tailored to Bangladesh context
  pushBot(
    'Assalamu Alaikum! I\'m your AI symptom assistant. I can give general guidance for Bangladesh.\n\n' +
      'If this is an emergency (severe chest pain, trouble breathing, fainting), please call 999 immediately.\n' +
      'For non-urgent medical advice by phone, you can also call Shasthyo Batayon 16263.'
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

function pushBot(text: string) {
  messages.value.push({ id: cryptoRandomId(), role: 'bot', text, time: getTimeInDhaka() })
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
  const reply = generateBangladeshAdvice(text)
  pushBot(reply)
  isTyping.value = false
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function generateBangladeshAdvice(input: string): string {
  const text = input.toLowerCase()

  // General signposts
  const footer =
    '\n\nIf symptoms worsen or you notice danger signs, visit your nearest Upazila Health Complex or call 999. ' +
    'For non-urgent doctor advice over phone, call Shasthyo Batayon 16263.'

  // Keyword-based simple triage
  if (/(chest pain|severe chest|pressure in chest|heart attack)/.test(text)) {
    return (
      'Severe or new chest pain can be an emergency.\n\n' +
      'Immediate steps:\n' +
      '• Rest and avoid exertion.\n' +
      '• If the pain is heavy/pressing, radiates to arm/jaw, or you are sweating/nauseated → call 999 now.\n' +
      '• If pain is mild and settles with rest, arrange a tele-visit today.' +
      footer
    )
  }

  if (/(fever|temperature|jhor|jor)/.test(text)) {
    return (
      'Fever care (Bangladesh context):\n\n' +
      '• Hydrate well; consider ORS if low appetite.\n' +
      '• Paracetamol 500 mg every 6–8 hours if needed (avoid if allergic/liver disease).\n' +
      '• During monsoon, if fever with headache/body pain → consider dengue test.\n' +
      '• Watch for red flags: persistent >102°F for 3+ days, breathing difficulty, confusion.' +
      footer
    )
  }

  if (/(cough|cold|sore throat|khansi)/.test(text)) {
    return (
      'Cough/sore throat:\n\n' +
      '• Warm fluids, steam inhalation, rest.\n' +
      '• If cough >2 weeks, night sweats, weight loss → visit DOTS center for TB screening.\n' +
      '• Shortness of breath, SpO₂ <94% (if you can measure), high fever → urgent evaluation.' +
      footer
    )
  }

  if (/(diarrhea|loose motion|pani jhora)/.test(text)) {
    return (
      'Diarrhea care:\n\n' +
      '• Start ORS after each loose stool; take small frequent sips.\n' +
      '• Zinc for children (>6 months): 20 mg daily for 10–14 days.\n' +
      '• Red flags: very low urine, lethargy, blood in stool → seek care today.' +
      footer
    )
  }

  if (/(bp|blood pressure|hypertension|pressure)/.test(text)) {
    return (
      'Blood pressure guidance:\n\n' +
      '• Reduce salt (no added salt), walk 30 mins/day, take meds regularly.\n' +
      '• If BP ≥160/100 with headache/chest pain/blurred vision → urgent care.\n' +
      '• Keep a morning/evening BP log to share with your doctor.' +
      footer
    )
  }

  if (/(diabetes|sugar)/.test(text)) {
    return (
      'Diabetes tips:\n\n' +
      '• Check fasting glucose; maintain a plate with ½ vegetables, ¼ protein, ¼ carbs.\n' +
      '• Daily foot check; keep vaccines up to date.\n' +
      '• Seek care for dizziness, very high sugars, or vomiting.' +
      footer
    )
  }

  if (/(pregnant|pregnancy|garbhoboti)/.test(text)) {
    return (
      'Pregnancy advice:\n\n' +
      '• Start/continue folic acid; attend ANC at your nearest Upazila Health Complex.\n' +
      '• Danger signs: bleeding, severe headache/blurred vision, reduced fetal movements → urgent care.' +
      footer
    )
  }

  if (/(child|baby|shishu|kids)/.test(text)) {
    return (
      'Child health:\n\n' +
      '• Follow EPI vaccination schedule; keep growth monitoring visits.\n' +
      '• For fever, ensure hydration; for diarrhea, ORS + zinc (dose by age).\n' +
      '• Fast breathing, chest indrawing, lethargy → go to hospital.' +
      footer
    )
  }

  if (/(heart rate|tachycardia|hr|palpitations)/.test(text)) {
    return (
      'Fast heart rate:\n\n' +
      '• Sit, rest, hydrate; limit caffeine.\n' +
      '• Check for fever, anxiety, poor sleep as triggers.\n' +
      '• If resting HR >120 for >15 min or with chest pain/dizziness → urgent evaluation.' +
      footer
    )
  }

  return (
    'Thanks for sharing. I\'ll ask a few quick questions to guide you:\n' +
    '• How long have you had this issue?\n' +
    '• Do you have fever, chest pain, trouble breathing, or severe weakness?\n' +
    '• Any long-term conditions (BP, diabetes, asthma, pregnancy)?' +
    footer
  )
}
</script>


