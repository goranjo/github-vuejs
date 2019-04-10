<template>
    <div class="posts--list">
        <div
                class="shut-your-mouth"
                v-for="user in users"
                v-bind="{user}"
                :key="user.id"
        >
            <slot v-bind="post"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'users-list',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
