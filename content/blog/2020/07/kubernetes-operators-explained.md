---
title: "Kubernetes Operators Explained"
url: blog/kubernetes-operators-explained
draft: false
date: 2020-07-01T9:00:00+02:00
categories: ["kubernetes"]
canonical: https://blog.container-solutions.com/kubernetes-operators-explained

amp:
  elements: ["amp-youtube"]

photo:
  source: "/img/blog/kubernetes-operators-explained.jpg"
  credits: '<span>Photo by <a href="https://unsplash.com/@scienceinhd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Science in HD</a> on <a href="https://unsplash.com/s/photos/operator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
---

Have you ever wondered how effective Site Reliability Engineering (SRE) teams manage complex applications successfully? In the Kubernetes ecosystem, there is only one answer: Kubernetes Operators! In this article, we will examine both what they are and how they work.

<!--more-->

The Kubernetes Operator concept was developed by engineers at CoreOS in 2016 as an advanced and native way of building and driving every application on the Kubernetes cluster, which needs domain-specific knowledge. It provides a consistent approach to handle all application operational processes automatically, without any human reaction via close cooperation with the Kubernetes API. In other words, an operator is a way of packaging, running, and managing Kubernetes applications.

The Kubernetes Operator pattern acts in accordance with one of the core Kubernetes principles: [the control theory](https://en.wikipedia.org/wiki/Control_theory). In robotics and automation, it is a mechanism that continuously operates dynamical systems. It relies on an ability to quickly tailor the workload demand to the available resources as accurately as possible. The objective is to develop a control model with the necessary logic to help an application or system remain stable. In Kubernetes world, that part is handled by controllers.

A controller is a special software that, in the loop, responds to changes and performs adaptation actions in the cluster. The first Kubernetes controller was a kube-controller-manager. It is regarded as an ancestor for all operators, which were built later.

## What Is a Controller Loop?

To put it simply, controller loops are the base of controller actions. Imagine there is a non-terminating process (called a reconciliation loop, in Kubernetes) happening over and over again, as in the following illustration:

{{< img src="/img/blog/kubernetes-operators-reconciliation-loop.png" title="Kubernetes Operator Controller Loop" size="564x" >}}

This process observes at least one Kubernetes [object](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/#kubernetes-objects), which contains information about the desired state. Objects such as ...

- Deployments,
- Services,
- Secrets,
- Ingress,
- Config Maps,

… are defined by configuration files made up of manifests in JSON or YAML. Then the controller(s) makes a continuous adjustment via Kubernetes API to imitate the desired state until the current state becomes the desired state, according to the built-in logic.

In that way, Kubernetes deals with the dynamic nature of Cloud Native systems, by handling a constant change. Examples of modifications perform to achieve expected state include:

- Noticing when nodes go down and demanding a new one.
- Checking if pods need to be replicated.
- Creating a new load-balancer, if requested.

## How Does a Kubernetes Operator Work?

An operator is an application-specific controller. It extends a Kubernetes API to create, configure, and manage complex applications on behalf of humans (operation engineers or site reliability engineers). Let’s see what Kubernetes documentation says about it.

> _Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components. Operators follow Kubernetes principles, notably the control loop._ - [Kubernetes Documentation](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)

So far, you know that operators take advantage of controllers that observe Kubernetes objects. These controllers are a bit different because they are tracing custom objects, often called custom resources (CR). CR is an extension of the Kubernetes API that provides a place where you can store and retrieve structured data—the desired state of your application. The whole principle of operation is presented in the diagram below.

{{< img src="/img/blog/kubernetes-operators-controller-loop.png" title="Kubernetes Operator Controller Loop"  size="784x" >}}

The Operator continuously tracks cluster events relating to a specific type of custom resource. The types of events on these custom resources that can be tracked are:

- Add,
- Update,
- Delete.

When the operator receives any information, it will take action to adjust the Kubernetes cluster or external system to the desired state as part of its reconciliation loop in the custom controller.

## How to add a custom resource?

A custom resource extends Kubernetes capabilities by adding new kinds of objects that can be helpful for your application. Kubernetes provides two ways to add custom resources to clusters:

- **via API Aggregation**, an advanced method that requires you to build your own API Server, but will give you more control
- **via Custom Resource Definitions (CRD)**, a simple way that can be created without any programming knowledge, as an extension to the original Kubernetes API server.

These two options meet the needs of different users, who can choose between flexibility and ease of use. The Kubernetes community created a [comparison](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#choosing-a-method-for-adding-custom-resources) that will help you decide what method is right for you, but the most popular choice is CRD.

### Custom Resource Definitions

Custom Resource Definitions have been around for quite some time now; the first major API specification was released with Kubernetes 1.16.0. The manifest below presents an example:

```yaml
apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  name: application.stable.example.com
spec:
  group: stable.example.com
  version: v1
  scope: Namespaced
  names:
    plural: application
    singular: applications
    kind: Application
    shortNames:
      - app
```

This CRD will allow you to create a CR called _Application_. (We are going to use it in the next section.) The first two lines define what `apiVersion apiextensions.k8s.io/v1beta1` of object kind `CustomResourceDefinition` you want to create.

The metadata describes the name of the resource, but the most important place here is the field _spec_. It lets you specify the group and version and the scope of visibility - namespaced or cluster-wide.

Afterwards, you define names in multiple formats and create a handy short name, which lets you perform a command `kubectl get app` to get the existing CR.

### Custom Resource

The CRD above allows you to create the following manifest of a custom resource.

```yaml
apiVersion: stable.example.com/v1
kind: Application
metadata:
  name: application-config
spec:
  image: container-registry-image:v1.0.0
  domain: teamx.yoursaas.io
  plan: premium
```

As you can see, we can contain here all the necessary information required to run an application for a specific case. This custom resource will be observed by our operator - to be precise, by the operator’s custom controller. According to the built-in logic in the controller, the necessary actions will imitate the desired state. It can create a Deployment, Service, and necessary ConfigMaps for our application. Run it and expose it via ingress on a specific domain. This is just an example of a use case, but it can do whatever is designed.

Operators can also be used to provision resources that live outside Kubernetes. You can control the provisioning of external routers or create a database in the cloud without leaving the Kubernetes platform.

## Kubernetes Operators: a Case Study

To have a whole clear picture of Kubernetes Operators, let’s examine a [Prometheus Operator](https://github.com/coreos/prometheus-operator), one of the first and most popular operators. It simplifies the deployment and configuration of Prometheus, Alertmanager, and related monitoring components.

The core feature of the Prometheus Operator is to monitor the Kubernetes API server for changes to specific objects and ensure that the current Prometheus deployments match these objects. The Operator acts on the following Custom Resource Definitions (CRDs):

- **Prometheus**, which defines a desired Prometheus deployment.
- **Alertmanager**, which defines a desired Alertmanager deployment.
- **ServiceMonitor**, which declaratively specifies how groups of Kubernetes services should be monitored. The Operator automatically generates Prometheus scrape configuration based on the current state of the objects in the API server.
- **PodMonitor**, which declaratively specifies how a group of pods should be monitored. The Operator automatically generates Prometheus scrape configuration based on the current state of the objects in the API server.
- **PrometheusRule**, which defines a desired set of Prometheus alerting and/or recording rules. The Operator generates a rule file, which can be used by Prometheus instances.

The Prometheus Operator automatically detects changes in the Kubernetes API server to any of the above objects, and ensures that matching deployments and configurations are kept in sync.

## Need more?

If you would like to hear more about how to extend Kubernetes, take a look at this talk from one of my Container Solutions colleagues, Adam Otto, from [Cloud Native Warsaw Conference](https://cloudnativewarsaw.com/).

{{< youtube id="8QoCL1NCVv4" >}}

Do you wanna build quickly an operator? Take the benefits from one of Kubernetes Operator Frameworks. Here is an "Awesome" list of all frameworks available on the market:

{{< repo href="https://github.com/pperzyna/awesome-operator-frameworks" title="pperzyna/awesome-operator-frameworks" desc="A curated list of awesome Kubernetes Operator Frameworks" img="/img/logo/awesome-operator-frameworks.png" >}}

---

The article has been originally published on the [Container Solutions](https://blog.container-solutions.com/kubernetes-operators-explained) blog.
