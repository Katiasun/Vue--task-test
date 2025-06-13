<script setup></script>

<template>
  <dialog
    id="favDialog"
    class="rounded-lg shadow-xl p-6 bg-slate-800 text-white border border-yellow-500 max-w-sm md:max-w-md lg:max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
  >
    <div class="flex flex-col items-center gap-4">
      <p class="text-xl font-bold text-center">Greetings, one and all!</p>
      <p class="text-md text-gray text-center">This is a test dialog. Click OK to close it.</p>

      <form method="dialog" class="w-full mt-4">
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition duration-200 w-full"
        >
          OK
        </button>
      </form>
    </div>
  </dialog>
</template>
