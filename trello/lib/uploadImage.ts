import { ID, storage } from "@/appwrite";


const uploadImage = async (file: File) => {
  if (!file) return;
  
  const fileUploaded = await storage.createFile(
    "64e58b39a37066d690fd",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;