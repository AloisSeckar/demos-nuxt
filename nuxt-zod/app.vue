<template>
  <div>
    <h1>nuxt-zod</h1>
    <div>
      This demo shows <a href="https://zod.dev">Zod</a> in <a href="https://nuxt.com">Nuxt</a>.
    </div>
    <div>
      Valid object: {{ validObject }}
    </div>
    <div>
      Invalid object: {{ invalidObject }}
    </div>
  </div>
</template>

<script setup lang="ts">
// import using wildcard notation
// this allows to use all Zod features in a predictable de-facto standard way
import { z } from 'zod/v4'

// define a Zod schema
const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})

// inferred type for using in app
type Login = z.infer<typeof LoginSchema>;

// parse an object using the schema
// this will throw an error if the object is invalid
let validObject: Login
let invalidObject: Login
try {
  validObject = LoginSchema.parse({ email: "jane.doe@example.com", password: "12345" });
  invalidObject = LoginSchema.parse({ email: "jane.doe@example.com", password: 12345 });
} catch (error) {
  // ZodError: Expected string, received number
  console.log((error as Error).message);
}
</script>