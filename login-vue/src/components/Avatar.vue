<template>
  <div class="avatar" :style="{'background-image': `url(${tmpURL || avatar})`}">
    <form v-if="isEditable || isUpdatable" id="form-avatar">
      <label for="avatar" class="label" v-if="!tmpURL && !avatar">
        <font-awesome-icon icon="user" size="2x" />
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
  props: ["avatar", "isEditable", "isUpdatable"],
  created() {
    if (Boolean(this.isUpdatable) && Boolean(this.isEditable)) throw new Error("Avatar componenet error : Attention, choisir entre les props isEditable ET isUpdatable, pas les deux en même temps")
  },
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
      const fileObject = e.target.files[0];
      this.tmpURL = URL.createObjectURL(fileObject);

      if (this.isUpdatable) {
        const fd = new FormData();
        fd.append("avatar", fileObject);
        this.$store.dispatch("user/updateAvatar", fd);

      } else if (this.isEditable) this.$emit("avatar-change", fileObject);
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
#form-avatar {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>