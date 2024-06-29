import mongoose from "mongoose";

// Habilitar logs detallados
mongoose.set("debug", true);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cleanExpress:6nnigIQ0eaUd6gJ8@cluster0.b92qm1v.mongodb.net/db-laundry-system?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 60000, // 60 segundos
        socketTimeoutMS: 60000, // 60 segundos
        serverSelectionTimeoutMS: 60000, // Tiempo de espera para seleccionar un servidor
        heartbeatFrequencyMS: 10000, // Frecuencia del latido del corazón
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    setTimeout(connectDB, 5000); // Intentar reconectar en 5 segundos
  }
};

connectDB();

export default mongoose;
