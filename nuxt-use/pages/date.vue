<template>
  <div>
    <BackLink />
    <div>
      <pre style="display: inline-block;">useNow</pre> returns reactive Date instance to get current date and time
    </div>
    <div>
      <pre style="display: inline-block;">useDateFormat</pre> allows any "DateLike" object to be formatted the way you like
    </div>
    <div>
      Due to "hydration mismatch" issues <pre style="display: inline-block;">useNow</pre> cannot be used in SSR,
      or you have to wrap it with <pre style="display: inline-block;">&lt;ClientOnly&gt;</pre> component:
      <ClientOnly>
        <!-- otherwise this would yield "hydration mismatch" warning in SSR mode -->
        <!-- because time during rendering on server and on client is different -->
        {{ useDateFormat(currentDate, "YYYY-MM-DD HH:mm:ss.SSS").value }}
      </ClientOnly>
    </div>
    <br>
    <div>
      Alternatively,
      <NuxtLink to="https://nuxt.com/docs/api/components/nuxt-time">
       <pre style="display: inline-block;">&lt;NuxtTime&gt;</pre>
      </NuxtLink>
      built-in component can be used to handle reactive date object accordingly:
      <NuxtTime
        :datetime="currentDate"
        year="numeric"
        month="2-digit"
        day="2-digit"
        hour="2-digit"
        minute="2-digit"
        second="2-digit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// this function gets the reactive version of Date object
// so it always return the actual date and time
const currentDate = useNow()
</script>
