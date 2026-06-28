import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async createPost({title, slug, content, featuredImage, status, userId}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("Appwrite create post error: ",error);
        }
    }
    async updatePost(slug, {title, content, featuredImage, status, userId}) {

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        }catch(error){
            console.log("Appwrite update error: ",error);
        }
    }
    async DeletePost(slug) {

        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        }catch(error){
            console.log("Appwrite delete error: ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log('Appwrite get post error: ',error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("Status ", "Active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                queries,
            )
            return true
        } catch (error) {
            console.log('Appwrite get all post error: ',error);
            return false;
        }
    }


    //file upload appwrite service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('uploafile error: ',error);
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log('delete file error: ',error);
        }
    }
    getFilePreview(field){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service;

export default service;

