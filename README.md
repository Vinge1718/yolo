# Deploy Yolo Application to GKE(Google Kubernetes Engine) 
# Steps
- Clone the repository
   
    git clone https://github.com/RAJABIBRAZ/yolo
    

- Checkout to `yolo-ip4` branch
    
    git checkout yolo-ip4
    
- Set up Google SDK CLI then create a kubernetes cluster on GKE.
    
    gcloud container clusters create yolo-ip4 --num-nodes=3
    
-  Setup Connection to created GKE cluster in with your local machine or cloud shell.
    sh
    gcloud container clusters get-credentials yolo-ip4 --zone us-central1-a --project <PROJECT_ID>
    
-  Run manifest files to create deployment.
    sh
    kubectl apply -f manifests
    
- Confirm status of all deployments.
    sh
    kubectl get all
    
- Check status of service.
    sh
    kubectl get svc
    
- Get IP of the service in the browser.


# Cleanup
```sh
kubectl delete -f manifests
```
