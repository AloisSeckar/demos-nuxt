<template>
  <div>
    <h1>nuxt-neon</h1>
    <div>
      Sample integration to <a href="https://neon.tech/">Neon database</a> into Nuxt
    </div>
    <div>
      <strong>NOTE:</strong> own Neon account is necessary to run this demo (see README.md for instructions)
    </div>
    <h2>Neon database connection</h2>
    <div v-if="status === 'pending'">
      Fetching data...
    </div>
    <div v-if="data">
      <strong>Neon data:</strong><br>{{ data }}
    </div>
    <div v-if="error">
      <strong>Error:</strong><br>{{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { neon } from '@neondatabase/serverless'

// use Nuxt Runtime config values to avoid hardcoding private information
// TODO this should be server-side private config
const host = useRuntimeConfig().public.neonHost
const user = useRuntimeConfig().public.neonUser
const pass = useRuntimeConfig().public.neonPass
const db = useRuntimeConfig().public.neonDB

// obtain sql connection to neon instance
const sql = neon(`postgresql://${user}:${pass}@${host}.neon.tech/${db}?sslmode=require`)

// read data from demo table
// TODO how to have dynamic table name?
const { data, status, error } = await useAsyncData(() => sql`SELECT * FROM playing_with_neon`)
</script>
