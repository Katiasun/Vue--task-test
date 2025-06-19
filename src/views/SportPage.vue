<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vue directives!')

const checked = ref(false)

const selectedOption = ref('Option A')

const multiSelect = ref([])

const textareaValue = ref('Text in a textarea...')

// --- Приклади для v-show ---
const showContentShow = ref(true)

// 2. Змінна для демонстрації лічильника з v-show.
const itemQuantity = ref(0)

// 3. Змінна для індикатора завантаження.
const isLoading = ref(true)

// 4. Змінна для початково прихованого попередження.
const isWarningVisible = ref(false)

// --- Приклади для v-if ---
const isLoggedIn = ref(false)

const showButton = ref(true)

const useRole = ref('editor')

const showDetails = ref(false)

const hasError = ref(false)

// --- Приклади для v-for ---
const fruits = ref(['Яблуко', 'Банан', 'Апельсин', 'Виноград'])

const users = ref([
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
])

const myObject = ref({ title: 'Lesson Vue', year: 2024, author: 'John Doe' })

const tasks = ref([
  { id: 101, text: 'Вивчити v-for', completed: false },
  { id: 102, text: 'Практикувати v-if', completed: true },
  { id: 103, text: 'Зробити домашнє завдання', completed: false },
])

const newTask = ref('')

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push({
      id: Date.now(),
      text: newTask.value.trim(),
      completed: false,
    })
    newTask.value = ''
  }
}

function removeTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

function toggleCompleted(id) {
  const task = tasks.value.find((item) => item.id === id)
  if (task) {
    task.completed = !task.completed
  }
}
</script>

<template>
  <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-black">
    <div class="text-yellow py-10 px-4">
      <h1 class="text-4xl font-bold text-yellow-400 mb-8 text-center">Vue Директиви: Практика</h1>

      <section class="mb-12">
        <h2 class="text-2xl text-pink-500 mb-6">1. Директива `v-model`</h2>
        <p class="mb-4 p-4 text-xs text-pink-900 rounded-lg shadow-md bg-white">
          <code>v-model</code> створює двостороннє зв'язування між вхідними даними форми та даними
          компонента. Спробуйте змінити значення в полях нижче.
        </p>

        <div class="mb-4 pb-4 border-b">
          <label for="textInput" class="block text-lg text-yellow font-medium"
            >1.1 Text field</label
          >
          <input
            id="textInput"
            type="text"
            placeholder="Enter the text..."
            v-model="message"
            class="mt-1 block rounded-mb border-yellow shadow-sm focus:border-pink-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
          />
          <p class="text-sm mt-5 text-yellow">
            Your text: <span class="text-pink-500 font-bold">{{ message }}</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Explanation: `v-model` binds user input to the reactive variable `message`.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <label class="inline-flex items-center text-lg font-medium text-yellow">
            <input
              type="checkbox"
              v-model="checked"
              class="rounded border-yellow text-indigo-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span class="ml-2">1.2 Is it activated? (Checkbox)</span>
          </label>
          <p class="text-sm mt-5 text-yellow">
            Status: <span class="font-bold text-pink-500">{{ checked ? 'Correct' : 'Nein' }}</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Explanation: `v-model` on a checkbox binds its state (checked/unchecked) to the boolean
            variable `checked`.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <label for="singleSelect" class="block text-lg font-medium text-yellow"
            >1.3 Select option (one):</label
          >
          <select
            id="singleSelect"
            v-model="selectedOption"
            class="block mt-1 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2border-yellow text-yellow shadow-sm"
          >
            <option value="option A">Option A</option>
            <option value="option B">Option B</option>
            <option value="option C">Option C</option>
          </select>
          <p class="text-sm mt-5 text-yellow">
            Selected option: <span class="font-bold text-pink-500">{{ selectedOption }}</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Explanation: `v-model` on `select` binds its selected value to `selectedOption`.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <label for="multiSelect" class="block text-lg font-medium text-yellow"
            >1.4 Вибір опцій (множинний) (Select multiple):</label
          >
          <select
            id="multiSelect"
            v-model="multiSelect"
            multiple
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 h-24"
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
          <p class="text-sm mt-5 text-yellow">
            Вибрані фрукти:
            <span class="font-bold text-pink-500">{{ multiSelect.join(', ') }}</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Пояснення: Для множинного вибору `v-model` прив'язується до масиву (`multiSelect`).
            Вибрані значення додаються або видаляються з цього масиву.
          </p>
        </div>

        <div class="mb-4">
          <label for="textarea" class="block text-lg font-medium text-yellow"
            >1.5 Текстова область (Textarea):</label
          >
          <textarea
            id="textarea"
            v-model="textareaValue"
            rows="4"
            placeholder="Enter your commentar..."
            class="mt-1 block rounded-md p-2 border-yellow shadow-sm focus:border-pink-700 focus-ring"
          ></textarea>
          <p class="">
            Your comment: <span class="font-bold text-pink-500">{{ textareaValue }}</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Пояснення: `v-model` з `textarea` зв'язує його вміст з реактивною змінною
            `textareaValue`.
          </p>
        </div>
      </section>
    </div>

    <div class="mx-auto p-4 text-yellow">
      <section class="p-6 mb-10">
        <h2 class="text-2xl text-pink-500 mb-6">2. Директива `v-show`</h2>
        <p class="mb-4 p-4 text-xs text-pink-900 rounded-lg shadow-md bg-white">
          **`v-show`** використовується для умовного відображення елементів. На відміну від `v-if`,
          яка повністю видаляє або створює елемент у DOM, `v-show` просто перемикає CSS-властивість
          `display` на `none` або видаляє її. Елемент завжди присутній в DOM, просто прихований. Це
          робить його більш ефективним для частих перемикань.
        </p>

        <div class="mb-4 border-b pb-4 border-yellow">
          <h3 class="text-lg text-yellow font-medium">2.1 `v-show` приклад:</h3>
          <button
            @click="showContentShow = !showContentShow"
            class="bg-pink-500 hover:bg-pink-700 font-bold text-white py-2 px-4 mb-2 rounded"
          >
            Перемкнути `v-show`
          </button>
          <div v-show="showContentShow" class="p-3 rounded text-pink-700 bg-slate-400">
            Цей блок видно, бо `showContentShow` є true. (Перевір інспектором елементів браузера)
          </div>
          <p class="text-xs text-pink-900 bg-slate-400 mt-5 p-1">
            Пояснення: Навіть коли `showContentShow` є `false`, цей `div` залишається в DOM, але
            його `display` CSS властивість встановлюється на `none`.
          </p>
        </div>

        <div class="mb-4 border-b pb-4 border-yellow">
          <h3 class="text-lg text-yellow font-medium">2.2 `v-show` для відображення лічильника:</h3>
          <button
            @click="itemQuantity++"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Додати товар
          </button>
          <button
            @click="itemQuantity = 0"
            class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Очистити
          </button>
          <p v-show="itemQuantity > 0" class="text-xs bg-yellow text-pink-500 mt-2 p-3 rounded">
            У кошику: <span class="font-bold text-xl">{{ itemQuantity }} товарів.</span>
          </p>
          <p class="text-xs text-pink-900 bg-slate-400 mt-5 p-1">
            Пояснення: `v-show` ідеально підходить для елементів, які часто перемикаються, оскільки
            вони не видаляються з DOM, а просто приховуються/відображаються через CSS.
          </p>
        </div>

        <div class="mb-4 border-b pb-4 border-yellow">
          <h3 class="text-lg text-yellow font-medium">2.3 `v-show` індикатор завантаження:</h3>
          <button
            @click="isLoading = !isLoading"
            class="py-2 px-4 rounded mb-2 text-white bg-pink-500 hover:bg-pink-700 font-bold"
          >
            Перемкнути завантаження
          </button>
          <div v-show="isLoading" class="p-3 rounded text-pink-950 bg-pink-100">
            Завантаження даних... <span class="inline-block animate-pulse">⏳</span>
          </div>
          <div v-show="!isLoading" class="p-3 rounded text-yellow bg-gray">
            Дані успішно завантажено!
          </div>
          <p class="text-xs text-pink-900 bg-slate-400 mt-5 p-1">
            Пояснення: `v-show` часто використовується для індикаторів завантаження, щоб швидко
            показувати та приховувати їх без повного перебудовування DOM.
          </p>
        </div>

        <div class="mb-4 border-b pb-4 border-yellow">
          <h3 class="text-lg text-yellow font-medium">2.4 `v-show` з кількома елементами:</h3>
          <p class="text-gray-700">Натисніть кнопку, щоб побачити приховані повідомлення.</p>
          <button
            @click="showContentShow = !showContentShow"
            class="py-2 px-4 rounded mb-2 text-white bg-pink-500 hover:bg-pink-700 font-bold"
          >
            Перемкнути повідомлення
          </button>
          <p v-show="showContentShow" class="p-2 bg-yellow-100 text-yellow-800 rounded mt-2">
            Це перше приховане повідомлення.
          </p>
          <p v-show="showContentShow" class="p-2 bg-yellow-100 text-yellow-800 rounded mt-2">
            Це друге приховане повідомлення.
          </p>
          <p class="text-xs text-pink-900 bg-slate-400 mt-5 p-1">
            Пояснення: Одна і та ж змінна (`showContentShow`) може контролювати видимість декількох
            елементів.
          </p>
        </div>

        <div class="mb-4 border-b pb-4 border-yellow">
          <h3 class="text-lg text-yellow font-medium">
            2.5 `v-show` початково прихований елемент:
          </h3>
          <button
            @click="isWarningVisible = !isWarningVisible"
            class="py-2 px-4 rounded mb-2 text-white bg-pink-500 hover:bg-pink-700 font-bold"
          >
            Перемкнути попередження
          </button>
          <div v-show="isWarningVisible" class="p-3 rounded text-yellow bg-gray">
            ⚠ Увага! Це важливе попередження.
          </div>
          <p class="text-xs text-pink-900 bg-slate-400 mt-5 p-1">
            Пояснення: `v-show` дозволяє легко керувати початковою видимістю елемента та змінювати
            її за потреби.
          </p>
        </div>
      </section>
    </div>

    <div class="mx-auto p-4 text-yellow">
      <section class="p-6 mb-10">
        <h2 class="text-2xl text-pink-500 mb-6">3. Директива `v-if`</h2>
        <p class="mb-4 p-4 text-xs text-pink-900 rounded-lg shadow-md bg-white">
          **`v-if`** використовується для умовного **рендерингу** блоків контенту. Це означає, що
          якщо умова є `false`, елемент (разом з усіма його дочірніми елементами) повністю
          **видаляється з DOM**. Якщо умова стає `true`, Vue створює елемент і вставляє його в DOM.
          Це робить `v-if` "важчою" операцією порівняно з `v-show`, але кращою для елементів, які
          рідко перемикаються, або якщо ти хочеш, щоб елемент взагалі не існував, коли він
          прихований.
        </p>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">3.1 `v-if` приклад:</h3>
          <button
            @click="isLoggedIn = !isLoggedIn"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            {{ isLoggedIn ? 'Вийти' : 'Увійти' }}
          </button>
          <div v-if="isLoggedIn" class="p-3 rounded bg-yellow text-pink-500 mb-3">
            Ви увійшли як користувач. Ласкаво просимо!
          </div>
          <p class="text-xs text-pink-900 bg-slate-400">
            Пояснення: `v-if` повністю додає або видаляє елемент з DOM.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">3.2 `v-if` з `v-else`:</h3>
          <button
            @click="showButton = !showButton"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            Перемкнути елемент
          </button>
          <p v-if="showButton" class="p-3 bg-white text-pink-600 rounded mb-3">
            Цей елемент видно (умова `v-if` true).
          </p>
          <p v-else class="p-3 bg-orange-100 text-orange-800 rounded mb-3">
            Цей елемент видно (умова `v-if` false, тому `v-else`).
          </p>
          <p class="text-xs text-pink-900 bg-slate-400">
            Пояснення: `v-else` повинен іти одразу за `v-if` або `v-else-if`.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">3.3 `v-if` / `v-else-if` / `v-else`:</h3>
          <div class="mb-2">
            <label for="userRoleSelect" class="block text-sm font-medium text-gray-700"
              >Виберіть роль:</label
            >
            <select
              v-model="useRole"
              id="userRoleSelect"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            >
              <option value="admin">Адміністратор</option>
              <option value="editor">Редактор</option>
              <option value="guest">Гість</option>
            </select>
          </div>
          <div v-if="useRole === 'admin'" class="p-3 bg-red-100 text-red-800 rounded mt-2 mb-3">
            Привіт, Адмін! Повний доступ.
          </div>
          <div
            v-else-if="useRole === 'editor'"
            class="p-3 bg-yellow-100 text-yellow-800 rounded mt-2"
          >
            Привіт, Редактор! Доступ до контенту.
          </div>
          <div v-else class="p-3 bg-gray-100 text-gray-800 rounded mt-2">
            Привіт, Гість! Обмежений доступ.
          </div>
          <p class="text-xs text-pink-900 bg-slate-400">
            Пояснення: Дозволяє ланцюжки умовного рендерингу.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">
            3.4 `v-if` на `&lt;template&gt;` елементі:
          </h3>
          <button
            @click="showDetails = !showDetails"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            {{ showDetails ? 'Приховати деталі' : 'Показати деталі' }}
          </button>
          <template v-if="showDetails">
            <p class="p-2 bg-indigo-100 text-indigo-800 rounded">
              Це перший параграф з детальною інформацією.
            </p>
            <p class="p-2 bg-indigo-100 text-indigo-800 rounded mt-1">
              Це другий параграф з додатковими даними.
            </p>
          </template>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Використання `v-if` на `&lt;template&gt;` дозволяє групувати елементи без
            додавання зайвого `div`.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">3.5 `v-if` для повідомлення про помилку:</h3>
          <button
            @click="hasError = !hasError"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            {{ hasError ? 'Прибрати помилку' : 'Створити помилку' }}
          </button>
          <div v-if="hasError" class="p-3 bg-red-100 text-red-800 rounded mb-2">
            ❌ Виникла помилка! Будь ласка, спробуйте ще раз.
          </div>
          <div v-else class="p-3 bg-green-100 text-green-800 rounded">
            Все добре, помилок немає.
          </div>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Ідеально підходить для умовного відображення критично важливих повідомлень.
          </p>
        </div>
      </section>
    </div>

    <div class="mx-auto p-4 text-yellow">
      <section class="p-6 mb-10">
        <h2 class="text-2xl text-pink-500 mb-6">4. Директива `v-for`</h2>
        <p class="mb-4 p-4 text-xs text-pink-900 rounded-lg shadow-md bg-white">
          **`v-for`** використовується для рендерингу списку елементів на основі масиву або об'єкта
          даних. Це дозволяє динамічно створювати повторювані блоки контенту. **Завжди
          використовуйте атрибут `:key`** (унікальний ідентифікатор) з `v-for` для ефективного
          оновлення списків Vue.
        </p>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">4.1 Список фруктів (масив рядків):</h3>
          <ul class="list-decimal list-inside space-y-1">
            <li v-for="fruit in fruits" :key="fruit" class="text-yellow p-1 rounded bg-blue-50">
              {{ fruit }}
            </li>
          </ul>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Простий перебір масиву рядків.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">4.2 Список користувачів (масив об'єктів):</h3>
          <ul class="list-decimal list-inside space-y-1">
            <li v-for="user in users" :key="user" class="text-yellow p-1 rounded bg-blue-50">
              ID: {{ user.id }} - Name: {{ user.name }}
            </li>
          </ul>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Перебір масиву об'єктів, використання `user.id` як унікального ключа.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">4.3 Властивості об'єкта:</h3>
          <ul class="list-none space-y-2">
            <li v-for="(value, key, index) in myObject" :key="key">
              {{ index + 1 }}. {{ key }}:
              <span class="text-yellow bg-pink-500 font-bold p-1">{{ value }}</span>
            </li>
          </ul>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Перебір властивостей об'єкта, доступ до значення, ключа та індексу.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">4.4 Діапазон чисел:</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="number in 5"
              :key="number"
              class="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
              >{{ number }}</span
            >
          </div>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: Створення елементів для кожного числа в діапазоні.
          </p>
        </div>

        <div class="mb-4 pb-4 border-b">
          <h3 class="text-lg text-yellow font-medium">
            4.5 Список завдань з додаванням/видаленням:
          </h3>
          <div class="flex mb-3">
            <input
              type="text"
              v-model="newTask"
              placeholder="Додати нове завдання..."
              class="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            />
            <button
              @click="addTask"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
            >
              Додати
            </button>
          </div>
          <ul class="space-y-2">
            <li
              v-for="task in tasks"
              :key="task"
              class="flex items-center justify-between p-3 rounded-lg shadow-sm"
              :class="{
                'bg-green-100 line-through text-gray-500': task.completed,
                'bg-white': !task.completed,
              }"
            >
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-pink-500 rounded"
                  :checked="task.completed"
                  @change="toggleCompleted(task.id)"
                />
                <span class="ml-3 text-lg">{{ task.text }}</span>
              </div>
              <button
                @click="removeTask(task.id)"
                class="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Видалити
              </button>
            </li>
            <li v-if="tasks.length === 0" class="text-center text-gray-500 p-4 bg-gray-50 rounded">
              Поки що немає завдань.
            </li>
          </ul>
          <p class="text-xs text-pink-900 bg-slate-400 mt-3">
            Пояснення: `v-for` з `:key` дозволяє ефективно керувати динамічними списками, додаючи,
            видаляючи та оновлюючи елементи без проблем.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
