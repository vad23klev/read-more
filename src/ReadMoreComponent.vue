<template>
  <div>
    <p v-html="formattedString"></p>
    <span v-show="text.length > maxChars">
      <a :href="link" id="readmore" v-show="!isReadMore" v-on:click="triggerReadMore($event, true)">{{moreStr}}</a>
      <a :href="link" id="readmore" v-show="isReadMore" v-on:click="triggerReadMore($event, false)">{{lessStr}}</a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    moreStr: {
      type: String,
      default: "read more"
    },
    lessStr: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    maxChars: {
      type: Number,
      default: 100
    }
  },

  data: function(){
    return {
      isReadMore: false
    };
  },

  computed: {
    formattedString: function formattedString() {
      var val_container = this.text;
      var indexStart = -1;
      var indexEnd = -1;
      console.log(!this.isReadMore && this.text.length > this.maxChars);
      if (!this.isReadMore && this.text.length > this.maxChars) {
        indexStart = val_container.indexOf('<p>') > -1 ? val_container.indexOf('<p>') : this.text.length;
        val_container = this.text;
        val_container = val_container.substring(indexStart);
        while (val_container.indexOf('<p>') > -1 && val_container.indexOf('<p>') <= this.maxChars) {
          indexStart = val_container.indexOf('<p>');
        }
        indexEnd = val_container.indexOf('</p>') > -1 ? val_container.indexOf('</p>') : this.text.length;
        val_container = this.text;
        val_container = val_container.substring(indexEnd);
        while (val_container.indexOf('</p>') > -1 && val_container.indexOf('</p>') <= this.maxChars) {
          indexEnd = val_container.indexOf('</p>');
        }
        val_container = this.text;
        if((indexStart > this.maxChars && indexEnd > this.maxChars) || (indexStart < indexEnd && indexEnd < this.maxChars)) {
          return val_container.substring(0, this.maxChars) + "...";
        }
        if(indexStart > indexEnd && indexStart < this.maxChars) {
          return val_container.substring(0, this.maxChars) + "...</p>";
        }
      }

      return val_container;
    }
  },

  methods: {
    triggerReadMore: function triggerReadMore(e, b) {
      if (this.link == "#") {
        e.preventDefault();
      }
      if (this.lessStr !== null || this.lessStr !== "") this.isReadMore = b;
    }
  }
};
</script>
