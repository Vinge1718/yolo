# Explanation of Implementation

## 1. Choice of Kubernetes Objects

- **MongoDB StatefulSet**: Chosen to maintain stable network identity and persistent storage for the database. This ensures data is not lost even if pods are restarted or rescheduled.
- **Deployments**: Used for backend and frontend for automated updates, self-healing, and easy scaling.
- **Services**:
  - **LoadBalancer**: Frontend exposed to the internet so users can access the application publicly.
  - **ClusterIP**: Backend and MongoDB services are internal, allowing pods to communicate within the cluster securely.
- **Labels and Annotations**: Included in all Kubernetes objects to track versions, pods, and for selection by services.

---

## 2. Exposure to Internet Traffic

- The frontend service uses a `LoadBalancer`, which automatically provisions an external IP on GKE. Users can access the application using this IP.
- Backend and MongoDB are internal (`ClusterIP`) to prevent direct public access.

---

## 3. Persistent Storage

- **MongoDB StatefulSet** uses a **PersistentVolumeClaim (PVC)** to attach storage.  
- Without PVC, data in MongoDB would be lost if the pod is deleted. PVC ensures the items added to the cart persist even after pod restarts.

---

## 4. Git Workflow

- Commits were made incrementally for each feature:
  1. Initial project setup with Dockerfiles and basic app structure.
  2. Backend development and Docker image creation.
  3. Frontend development and Docker image creation.
  4. Kubernetes manifests creation for backend, frontend, and MongoDB.
  5. Deployment and debugging on Minikube and GKE.
- Each commit is descriptive and reflects the step being implemented.
- GitHub repository contains both `README.md` and `explanation.md`.

---

## 5. Debugging and Notes

- Initially, the backend could not connect to MongoDB because the service name was incorrect.
- After fixing the `MONGO_URL` to `mongodb://mongo:27017/yolomy`, the backend started successfully.
- Frontend must reference backend as `http://backend-service:5000` for proper communication.
