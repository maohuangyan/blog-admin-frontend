<template>
  <div>
    <h1>Blog Admin</h1>

    <b-table :data="data" :columns="columns" @click="update"></b-table>


    <section>
        <div class="columns">
          <div class="column is-6">
            <b-field label="标题">
            <b-input v-model="post.title"></b-input>
        </b-field>

        <b-field label="内容">
            <b-input type="textarea" v-model="post.content"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button type="button" @click="save" class="button is-primary">
                  保存
                </button>
            </p>
        </b-field>

          </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        _id: null,
        title: null,
        content: null,
      },
      data: [],
      columns: [
        {
          field: "_id",
          label: "ID"
        },
        {
          field: "title",
          label: "标题"
        },
        {
          field: "created_at",
          label: "创建时间"
        }
      ]
    };
  },
  methods: {
    update(row) {
      this.post = row
    },
    save(){
      const method = this.post._id ? 'put' : 'post'
      const url = this.post._id ? `posts/${this.post._id}` : 'posts'
      this.$http[method](url, this.post).then(({ data }) => {
        // alert('保存成功')
        this.fetch()
      });
    },
    fetch() {
      this.$http.get("posts").then(({ data }) => {
        this.data = data;
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

