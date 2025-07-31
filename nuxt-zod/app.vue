<template>
  <div>
    <h1>nuxt-zod</h1>
    <div style="margin-bottom: 1rem;">
      This demo shows <a href="https://zod.dev">Zod</a> in <a href="https://nuxt.com">Nuxt</a>.
    </div>
    <div style="margin-bottom: 1rem;">
      Valid object: {{ validObject }}
    </div>
    <div style="margin-bottom: 1rem;">
      Safely parsed object: {{ safeObject }}
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
  console.error((error as Error).message);
}

// alternative safe parsing which avoids throwing an error
// v.SafeParseResult<typeof LoginSchema>
const safeObject = LoginSchema.safeParse({ email: "jane.doe@example.com", password: 12345 });
if (!safeObject.success) {
  // human-readable error info via "prettifyError"
  console.warn(z.prettifyError(safeObject.error));
}
</script>