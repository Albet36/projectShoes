module.exports = {
  Muti(mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  Single(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
