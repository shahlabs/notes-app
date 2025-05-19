import { database } from "./appwrite";

const databaseService = {
  //List documents
  async listDocuments(dbId, colId, queries = []) {
    try {
      const response = await database.listDocuments(dbId, colId, queries);
      return { data: response.documents || [], error: null };
    } catch (error) {
      console.error("Error fetching documents", error);
      return { data: [], error: error.message };
    }
  },

  //Create Document
  async createDocument(dbId, colId, data, id = null) {
    try {
      const response = await database.createDocument(
        dbId,
        colId,
        id || undefined,
        data
      );
      return response;
    } catch (error) {
      console.error("Error creating document", error);
      return { error: error.message };
    }
  },

  //Update Document
  async updateDocument(dbId, colId, documentId, data) {
    try {
      const response = await database.updateDocument(
        dbId,
        colId,
        documentId,
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating document", error);
      return { error: error.message };
    }
  },

  //Delete Document
  async deleteDocument(dbId, colId, documentId) {
    try {
      await database.deleteDocument(dbId, colId, documentId);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document", error);
      return { error: error.message };
    }
  },
};

export default databaseService;
