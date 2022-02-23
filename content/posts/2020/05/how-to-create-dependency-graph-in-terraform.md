---
draft: false
createdAt: 2020-05-17T9:00:00+02:00
url: /blog/how-to-create-dependency-graph-in-terraform/
title: "How to solve implicit dependency problems via Terraform Graph?"
description: |
  This Terraform feature comes as a Saviour! On a daily basis is not frequently used, but in case of a problem with dependencies can save your time. Terraform Graph command generates a visual representation of dependencies to help you debug easier.

photo:
  source: "/images/content/posts/how-to-create-dependency-graph-in-terraform.jpg"
  credits: 'Photo by Volodymyr Hryshchenko on Unsplash'
---

## The Implicit Dependency problem

The problem with dependencies most often occurs during provisioning and destroying cloud resources, because sometimes terraform misidentified dependencies. The primary way how Terraform resolves dependencies is by **implicit dependency**, it is when one block of code uses a reference to another resource value, see the example below.

```hcl
resource "aws_eip" "ip" {
    vpc = true

    # Terraform assumes that this Elastic IP must be created only after the
    # EC2 has been created.
    instance = aws_instance.example.id
}
```

## The Explicit Dependency solution

The most common solution is to add an option `depends_on`, which can you directly set up in the resource block in [terraform code](https://www.terraform.io/docs/configuration/resources.html#resource-dependencies). This param creates an [explicit relation](https://learn.hashicorp.com/terraform/getting-started/dependencies#implicit-and-explicit-dependencies). See the example below.

```hcl
resource "aws_instance" "example" {
  ami           = "ami-2757f631"
  instance_type = "t2.micro"

  # Tells Terraform that this EC2 instance must be created only after the
  # S3 bucket has been created.
  depends_on = [aws_s3_bucket.example]
}
```

## Debugging

There are multiple solutions to debug a terraform. You can read about all of them in the tutorial: [How to Debug Terraform Projects](https://spacelift.io/blog/terraform-debug), but the easiest way to get to know which resource is dependent on which one is to use `terraform graph`. The output from that command will be a visual representation of dependencies in DOT format, which can be used by [GraphViz](http://www.graphviz.org/) to generate charts.

> Graphviz is open source graph visualization software. Graph visualization is a way of representing structural information as diagrams of abstract graphs and networks.

This can help you understand and see all connections between resources that Terraform assume to determine the proper order of modifying cloud resources. Let's see how to do that, but first of all, you have to install a graphviz package on your system.

### Mac's

```bash
brew install graphviz
```

### Linux

```bash
sudo apt-get install graphviz
```

### Windows

The necessary windows installer, you can download from [WinGraphviz website](http://wingraphviz.sourceforge.net/wingraphviz/).

## Create a Dependency Graph

To create a chart, run the following command:

```bash
terraform graph | dot -Tsvg > graph.svg
```

then you will create a graph similar to that one:

![/images/content/posts/how-to-create-dependency-graph.png](Dependency Graph in Terraform)
