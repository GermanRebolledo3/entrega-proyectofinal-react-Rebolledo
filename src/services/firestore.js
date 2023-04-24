import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";
import products from "../data/products";


const firebaseConfig = {
  apiKey: "AIzaSyBYGDIRK5kEW8sPgG2q7T70R1vZAQRLyQY",
  authDomain: "tapiceria-rebolledo.firebaseapp.com",
  projectId: "tapiceria-rebolledo",
  storageBucket: "tapiceria-rebolledo.appspot.com",
  messagingSenderId: "1026477280259",
  appId: "1:1026477280259:web:d44420dc9489063ec55236",
  measurementId: "G-7VC10PC6WB"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
    const productsRef = collection(db, "products");
    const productsSnap = await getDocs(productsRef);
    const documents = productsSnap.docs;

    const docsData = documents.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

return docsData;  
}

export async function getSingleItem(idURL) {
    const docRef = doc(db, "products", idURL);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryid) {
    const productsRef = collection(db, "products");


    const q = query(productsRef, where("category", "==", categoryid));

    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
    });

    return docsData;
}

export async function createOrder(order){
    const collectionOrdersRef = collection(db, "order");
    const response = await addDoc(collectionOrdersRef, order)
    return response.id;
}

export async function exportData(){
    const products = [
        {
          
            
                id: "sofa-1",
                title: "sillones modernos",
                img: "./img/juegodesillones.jpg",
                category: "Sillones",
                    stock: 15,
               
                price: 120000
            },
            {
                id: "sofa-2",
                title: "sofas de un cuerpo",
                img: "./img/juegodesillones1cuerpo.jpg",
                category: "Sillones",
                    stock: 20,
                    
                
                price: 45000
            },
            {
                id: "sofa-3",
                title: "sofa blanco",
                img: "./img/juegodesillonesblanco.jpg",
                category: "Sillones",
                    stock: 34,
                  
          
                price: 130000
            },
            {
                id: "silla-1",
                title: "silla vintage",
                img: "https://i.ibb.co/vPL7F1M/pexels-pixabay-416320.jpg",
                category: "Sillas",
                    stock: 12,
                 
                price: 6000
            },
            {
                id: "silla-2",
                title: "sillon de un cuerpo",
                img: "./img/sillon1cuerpo.jpg",
                category: "Sillones",
                    stock: 11,
                  
                price: 8000
            },
        
            {
                id: "grande-1",
                title: "sillon marron",
                img: "./img/sillon3cuerposmarron.jpg",
                category: "Sillones",
                    stock: 45,
                
                price: 57000
            },
            {
                id: "sofa-4",
                title: "sillones vintage",
                img: "./img/sillones1cuerpo.jpg",
                category: "Sillones",
                    stock: "12",
                
                price: 40000
            },
            {
                id: "sofa-5",
                title: "sillon clasico",
                img: "./img/sillonesclasicoverde.jpg",
                category: "Sillones",
                    stock: 2,
                
                price: 70000
            },
            {
                id: "sofa-6",
                title: "sillones clasicos",
                img: "./img/sillonesclasicos.jpg",
                category: "Sillones",
                    stock: 5,
                    
                price: 75000
            },
            {
                id: "silla-3",
                title: "sllon futurista",
                img: "./img/sillonesfuturistas.jpg",
                category: "Sillones",
                    stock: 8,
                price: 56000
            }
          
        ];
      

        const collectionRef = collection(db, "products");
        for (let item of products) {
        item.index = item.id;
        delete item.id;
        const response = await addDoc(collectionRef, item);
        console.log("producto exportado con ID: " + response.id);
        }
    }

