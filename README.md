# react-dev
[ReactJS Tutorial 18](https://www.youtube.com/watch?v=MHn66JJH5zs&list=PLSsAz5wf2lkKm0BG9wUWWSgYWBzDa-dFs)
![alt text](image.png)  
npm create vite@4.1.0 
Step 1: Asked to enter the project name: reactpro  
Step 2: Select a framework: react  
Step 3: Select a variant: javascript  
Step 4: To change to react folder and execute command ```npm install & npm run dev```  

'''
cd reactpro  & 
npm install & npm run dev
```
 
![Step 2: Select a framework: react](image-1.png)  
![Step 3: Select a variant: javascript](image-2.png)  


Replace to vite config file  
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/  
export default defineConfig({
  server: {
    allowedHosts: true
  },
  plugins: [react()],
})


```
or add vite.config.js
```
server: {
    allowedHosts: true
  }
``

How to define a simple jsx component.  
```
export default function Fruit() {
  return <div>Fruit Works</>
}


