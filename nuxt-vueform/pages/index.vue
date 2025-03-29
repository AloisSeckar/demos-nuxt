<template>
  <div class="vueform">
    <p>
      <strong>Prague, March 29, 2025</strong><br>
      Following form was vibe coded using Vueform Builder with their AI Assistant tool with prompt:<br>
      <em>"Design user profile form with first name, last name, age, gender, country and profile picture."</em>
    </p>
    <ClientOnly>
      <Vueform>
        <StaticElement
          name="title"
          tag="h1"
          content="User Profile Form"
          description="Please fill out the following information to complete your user profile."
        />
        <TextElement
          name="first_name"
          label="First Name"
          placeholder="Enter your first name"
          :rules="[
            'required',
          ]"
        />
        <TextElement
          name="last_name"
          label="Last Name"
          placeholder="Enter your last name"
          :rules="[
            'required',
          ]"
        />
        <TextElement
          name="age"
          label="Age"
          placeholder="Enter your age"
          :rules="[
            'required',
          ]"
        />
        <RadiogroupElement
          name="gender"
          label="Gender"
          :rules="[
            'required',
          ]"
          :items="[
            'Male',
            'Female',
            'Other',
          ]"
        />
        <TextElement
          label="Please specify gender:"
          :conditions="[
            [
              'gender',
              'in',
              [
                'Other',
              ],
            ],
          ]"
        />
        <RadiogroupElement
          name="country"
          label="Country"
          :rules="[
            'required',
          ]"
          :items="[
            '(List of countries)',
            'Other',
          ]"
        />
        <TextElement
          label="Please specify country:"
          :conditions="[
            [
              'country',
              'in',
              [
                'Other',
              ],
            ],
          ]"
        />
        <FileElement
          name="profile_picture"
          label="Profile Picture"
          description="Upload a profile picture to personalize your account."
          :rules="[
            'required',
          ]"
        />
        <ButtonElement
          name="submit"
          button-label="Submit"
          :submits="true"
          :full="true"
          align="center"
        />
      </Vueform>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// designed by Vueform Builder
// https://builder.vueform.com/demo

// Vibe coded with their AI Assistant tool with prompt:
// "Design user profile form with first name, last name, age, gender, country and profile picture."
// 2025-03-29

// TODO work with the output
</script>

<style scoped lang="css">
.vueform {
  margin: 2em;
}
</style>
