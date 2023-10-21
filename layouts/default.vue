<template>
    <div class="flex flex-col h-screen bg-gray-50">
        <Navigation />
        <div class="flex-grow text-lg px-2 py-1 bg-gray-50">
            <slot />
        </div>
        <Footer />
    </div>
  </template>
  