const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

aboutSchema.index({ title: "text", description: "text" });

const About = mongoose.model("About", aboutSchema);

module.exports = About;
