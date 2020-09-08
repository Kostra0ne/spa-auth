<template>
  <div class="avatar" :style="{'background-image': `url(${tmpURL || avatarImg})`}">
    <form v-if="isEditable">
      <label for="avatar" class="label">
        <font-awesome-icon icon="user" />
      </label>
      <input id="input_file" type="file" class="is-hidden" @change="handleAvatar" accept="image/*" />
      <label for="input_file">
        <font-awesome-icon class="is-clickable icon" icon="cog"></font-awesome-icon>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpURL: null
    };
  },
  name: "Avatar",
  props: ["avatar", "isEditable"],
  computed: {
    avatarImg() {
      if (this.tmpURL) return this.tmpURL;
      else if (typeof this.$props.avatar === "object")
        return URL.createObjectURL(this.$props.avatar);
      else return this.$props.avatar;
    }
  },
  methods: {
    handleAvatar(e) {
      this.tmpURL = URL.createObjectURL(e.target.files[0]);
    }
  }
};
</script>

<style scoped>
.avatar {
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 3px solid var(--color-dark);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.avatar .icon {
  color: forestgreen;
  background: var(--color-dark);
  border-radius: 50%;
  padding: 4px;
  top: 3px;
  right: -6px;
  position: absolute;
  height: 20px;
  width: 20px;
}
.avatar .icon:hover {
  color: var(--color-dark);
  background: var(--color-success);
}
</style>