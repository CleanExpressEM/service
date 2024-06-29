import mongoose from "mongoose";

mongoose.set("debug", true);

export const connectDB = async () => {
  const connect = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://cleanExpress:6nnigIQ0eaUd6gJ8@cluster0.b92qm1v.mongodb.net/db-laundry-system?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          connectTimeoutMS: 60000, // 60 segundos
          socketTimeoutMS: 60000, // 60 segundos
          autoReconnect: true, // Reconexión automática
          reconnectTries: Number.MAX_VALUE, // Intentos ilimitados
          reconnectInterval: 5000, // Intervalo de reconexión de 5 segundos
        }
      );
      console.log("Conexión exitosa a MongoDB");
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error);
      setTimeout(connect, 5000); // Intentar reconectar en 5 segundos
    }
  };

  connect();
};

connectDB();

export default mongoose;
