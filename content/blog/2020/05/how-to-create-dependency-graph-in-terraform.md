---
title: "How to create a Dependency Graph in Terraform from HashiCorp?"
url: blog/how-to-create-dependency-graph-in-terraform
draft: false
date: 2020-05-17T9:00:00+02:00
categories: ["build"]

photo:
  source: "/img/blog/how-to-create-dependency-graph-in-terraform.jpg"
  credits: '<span>Photo by <a href="https://unsplash.com/@lunarts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Volodymyr Hryshchenko</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
---

This Terraform feature comes as a Saviour! On a daily basis is not frequently used, but in case of a problem with dependencies can save your time. **Terraform Graph** command generates a visual representation of configuration or execution plan.

<!--more-->

The problem with dependencies most often occurs during provisioning and destroying cloud resources, because terraform misidentified dependencies between them. **The most common solution** for that error is option `depends_on`, which can you directly set up in the resource block in [terraform code](https://www.terraform.io/docs/configuration/resources.html#resource-dependencies). This param creates an [explicit relation](https://learn.hashicorp.com/terraform/getting-started/dependencies#implicit-and-explicit-dependencies).

The easiest way to get to know which resource is dependent on which one is to use `terraform graph`. The output from that command will be a visual representation in DOT format, which can be used by [GraphViz](http://www.graphviz.org/) to generate charts.

> Graphviz is open source graph visualization software. Graph visualization is a way of representing structural information as diagrams of abstract graphs and networks.

Let's see how to do that, but first of all, you have to install a graphviz package on your system.

### Mac's

```bash
brew install graphviz
```

### Linux

```bash
sudo apt-get install graphviz
```

### Windows

The necessery windows installer, you can download from [WinGraphviz website](http://wingraphviz.sourceforge.net/wingraphviz/).

## Create a Graph

To create a chart, run the following command:

```bash
terraform graph | dot -Tsvg > graph.svg
```

then you will create a graph similar to that one:

{{< img src="/img/blog/how-to-create-dependency-graph.png" title="Dependency Graph in Terraform" >}}
