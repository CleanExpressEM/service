import mongoose from "mongoose";

mongoose.set("debug", true); // Habilitar logs detallados

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cleanExpress:6nnigIQ0eaUd6gJ8@cluster0.b92qm1v.mongodb.net/db-laundry-system?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Terminar el proceso con error
  }
};

export default mongoose;
