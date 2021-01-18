<template>
  <div id="codeView" v-highlight>
    <pre><code >{{ message }}</code></pre>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: this.$route.query.content
        }
    }
}

</script>