# YOLO E-commerce Platform - Stage 1

This is a full-stack e-commerce application deployed on **Google Kubernetes Engine (GKE)**. The application allows users to view products and add them to the cart.

The platform allows users to add retail products through a dashboard, showcasing containerized backend, frontend, and database services.

---

# Live Application

Access the deployed app here: [http://34.68.194.35/](http://34.68.194.35/)

> Note: If adding products does not work, ensure the backend service is accessible at `http://backend-service:5000` from the frontend.

---

## kubernetes Objects Used

- **StatefulSet**: MongoDB database for persistent storage.
- **Deployments**: Backend and frontend for scalability and self-healing.
- **Services**:
  - `LoadBalancer`: Exposes frontend to the public internet.
  - `ClusterIP`: Backend and MongoDB services for internal communication.
- **PersistentVolume & PersistentVolumeClaim**: Ensures MongoDB data persists if pods are deleted.

---

## Docker Images

- Backend: `adrianapindi/yolo-backend:v1.0.1`
- Frontend: `adrianapindi/yolo-frontend:v1.0.0`
- MongoDB: Official MongoDB image -> mongo:6

---

## Steps to Deploy

1. Create Kubernetes objects in the following order:
```bash
kubectl apply -f manifests/mongo-statefulset.yml
kubectl apply -f manifests/mongo-service.yml
kubectl apply -f manifests/backend-deployment.yml
kubectl apply -f manifests/backend-service.yml
kubectl apply -f manifests/client-deployment.yml
kubectl apply -f manifests/client-service.yml


2. Verify pods and services
kubectl get pods
kubectl get svc


## Notes
Ensure environment variables (e.g., MONGO_URL) are correctly set in backend deployment.

Persistent storage is implemented via StatefulSet and PVC for MongoDB.

Frontend connects to backend using backend-service:5000 internally.