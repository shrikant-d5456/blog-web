const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

blogSchema.index({ title: "text", content: "text", author: "text" });

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
