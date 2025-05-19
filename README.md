Absolutely! Here's a professional README.md file that you can include in your GitHub repo. It clearly explains your project, highlights deployment to GKE, and documents key implementation details.

---

````markdown
# YOLO Backend - Kubernetes Deployment on GKE

## Project Overview

This project contains the Kubernetes manifests and configuration for deploying the YOLO backend application, along with a MongoDB database, on Google Kubernetes Engine (GKE). The backend is a containerized Node.js/Express application that connects to a MongoDB database.

---

## Architecture and Kubernetes Objects Used

- **Deployment:** Used for the YOLO backend application, ensuring availability and ease of updates.
- **StatefulSet:** Used for deploying MongoDB to ensure stable network identities and persistent storage.
- **Service:** 
  - A headless service (`clusterIP: None`) exposing MongoDB pods for stable DNS resolution.
  - A ClusterIP service exposing the backend pods internally.
- **Persistent Volume Claims:** Used to provide persistent storage for the MongoDB StatefulSet, so that data is retained even if pods are deleted or rescheduled.

---

## Deployment to Google Kubernetes Engine (GKE)

The application was deployed on a Google Cloud Platform (GCP) Kubernetes cluster using the following steps:

1. **Create a GKE Cluster**

   ```bash
   gcloud container clusters create yolo-cluster --zone us-central1-a --num-nodes=3
````

2. **Configure kubectl to connect to the cluster**

   ```bash
   gcloud container clusters get-credentials yolo-cluster --zone us-central1-a
   ```

3. **Apply Kubernetes manifests**

   ```bash
   kubectl apply -f mongo-statefulset.yaml
   kubectl apply -f yolo-backend-deployment.yaml
   ```

4. **Expose the backend service**

   * Using a LoadBalancer service or an Ingress controller to expose the backend to internet traffic.
   * Example exposing backend on port 80:

     ```yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: yolo-backend-loadbalancer
     spec:
       type: LoadBalancer
       selector:
         app: yolo-backend
       ports:
         - port: 80
           targetPort: 5000
     ```

5. **Access the application**

   After deployment, retrieve the external IP assigned by the LoadBalancer:

   ```bash
   kubectl get svc yolo-backend-loadbalancer
   ```

   The application will be accessible via:

   ```
   http://<EXTERNAL_IP>/
   ```

---

## Persistent Storage

MongoDB StatefulSet uses PersistentVolumeClaims with `ReadWriteOnce` access mode, ensuring data is retained despite pod restarts or rescheduling. This guarantees the cart data is persistent across application lifecycle events.

---

## Git Workflow

* Followed a structured Git workflow with **over 10 descriptive commits** capturing key steps including Docker image tagging, Kubernetes manifest creation, GKE deployment, and bug fixes.
* Repository includes:

  * `README.md` (this file)
  * `explanation.md` — detailing architectural decisions, Kubernetes object choices, and exposure methods.
  * Kubernetes manifest YAML files for backend and MongoDB deployment.
* Docker images are version-tagged and pushed to Docker Hub for consistency and easy tracking (e.g., `thalma/yolo-backend:v1.0.2`).

---

## Summary

This deployment demonstrates effective use of Kubernetes primitives:

* Proper use of **StatefulSets** for database management.
* Use of **persistent storage** to safeguard data.
* Application deployment with **Deployments** and internal service exposure.
* Exposing the backend service via **LoadBalancer** for public access.
* Hosted live on **Google Kubernetes Engine**.

---

## Live Application

The live backend is available at:

```
http://http://34.122.108.45/
```

---



