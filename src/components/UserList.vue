<template>
    <div class="user-list">
        <div
                class="userlists"
                v-for="user in users"
                v-bind="{user}"
                :key="user.id"
        >
            <slot v-bind="user"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user-list',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
