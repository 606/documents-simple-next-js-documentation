import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      { title: "Installation", href: "/installation" },
      { title: "Setup", href: "/setup" },
      { title: "Changelog", href: "/changelog" },
    ],
  },
  { spacer: true },

  // Core docs navigation (from contents/docs)
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      { title: "Cards", href: "/cards" },
      { title: "Diagrams", href: "/diagrams" },
      { title: "Filetree", href: "/filetree" },
      { title: "Lists", href: "/lists" },
      { title: "Maths", href: "/maths" },
      { title: "Notes", href: "/notes" },
      { title: "Steps", href: "/steps" },
      { title: "Table", href: "/table" },
      { title: "Tabs", href: "/tabs" },
    ],
  },
  {
    title: "Random",
    href: "/random",
  },

  { spacer: true },

  // Avro knowledge base hierarchy (from contents/*)
  {
    title: "Avro.Cc (GitHub KB)",
    href: "/avro-cc-github-606",
    heading: "Knowledge Bases",
    items: [
      { title: "Domains", href: "/domains" },
      {
        title: "AI Agents",
        href: "/ai-agents",
        items: [
          { title: "AutoDev", href: "/autodev" },
          { title: "AutoGPT", href: "/autogpt" },
          { title: "BabyAGI", href: "/babyagi" },
          { title: "Copilot", href: "/copilot" },
          { title: "CrewAI", href: "/crewai" },
          { title: "Cursor", href: "/cursor" },
          { title: "LangChain", href: "/langchain" },
          {
            title: "Local LLM",
            href: "/localllm",
            items: [
              { title: "GPT4All", href: "/gpt4all" },
              { title: "Jan", href: "/jan" },
              { title: "llama.cpp", href: "/llama-cpp" },
              { title: "LM Studio", href: "/lm-studio" },
              { title: "LocalAI", href: "/localai" },
              { title: "Ollama", href: "/ollama" },
              {
                title: "Text Generation WebUI",
                href: "/text-generation-webui",
              },
            ],
          },
          { title: "Semantic Kernel", href: "/semantic-kernel" },
        ],
      },
      {
        title: "API Development",
        href: "/api",
        items: [
          {
            title: "API Design",
            href: "/api-design",
            items: [
              { title: "Resource Modeling", href: "/resource-modeling" },
              { title: "URL Design", href: "/url-design" },
            ],
          },
          { title: "API Documentation", href: "/api-documentation" },
          { title: "API Frameworks", href: "/api-frameworks" },
          { title: "API Management", href: "/api-management" },
          { title: "API Security", href: "/api-security" },
          { title: "API Testing", href: "/api-testing" },
          {
            title: "GraphQL",
            href: "/graphql",
            items: [
              { title: "Federation", href: "/federation" },
              { title: "Resolvers", href: "/resolvers" },
              { title: "Schema Design", href: "/schema-design" },
              { title: "Subscriptions", href: "/subscriptions" },
            ],
          },
          {
            title: "Microservices",
            href: "/microservices",
          },
          {
            title: "REST APIs",
            href: "/rest-apis",
            items: [
              {
                title: "Content Negotiation",
                href: "/content-negotiation",
              },
              { title: "HTTP Methods", href: "/http-methods" },
              { title: "Hypermedia", href: "/hypermedia" },
              { title: "Status Codes", href: "/status-codes" },
            ],
          },
        ],
      },
      {
        title: "AWS",
        href: "/aws",
        items: [
          {
            title: "Compute",
            href: "/compute",
            items: [
              { title: "EC2", href: "/ec2" },
              { title: "ECS", href: "/ecs" },
              { title: "EKS", href: "/eks" },
              { title: "Lambda", href: "/lambda" },
            ],
          },
          {
            title: "Containers",
            href: "/containers",
            items: [
              { title: "ECS", href: "/ecs" },
              { title: "EKS", href: "/eks" },
              { title: "Fargate", href: "/fargate" },
            ],
          },
          {
            title: "DevTools",
            href: "/devtools",
            items: [
              { title: "CloudFormation", href: "/cloudformation" },
              { title: "CodeBuild", href: "/codebuild" },
              { title: "CodeDeploy", href: "/codedeploy" },
              { title: "CodePipeline", href: "/codepipeline" },
            ],
          },
          {
            title: "Messaging",
            href: "/messaging",
            items: [
              { title: "EventBridge", href: "/eventbridge" },
              { title: "SNS", href: "/sns" },
              { title: "SQS", href: "/sqs" },
              { title: "Step Functions", href: "/step-functions" },
            ],
          },
          {
            title: "Monitoring",
            href: "/monitoring",
            items: [
              { title: "CloudTrail", href: "/cloudtrail" },
              { title: "CloudWatch", href: "/cloudwatch" },
              { title: "X-Ray", href: "/x-ray" },
            ],
          },
          {
            title: "Networking",
            href: "/networking",
            items: [
              { title: "API Gateway", href: "/api-gateway" },
              { title: "CloudFront", href: "/cloudfront" },
              { title: "Route 53", href: "/route53" },
              { title: "VPC", href: "/vpc" },
            ],
          },
          {
            title: "SDK",
            href: "/sdk",
            items: [
              { title: "Best Practices", href: "/best-practices" },
              { title: "Configuration", href: "/configuration" },
              { title: "Services", href: "/services" },
            ],
          },
          {
            title: "Security",
            href: "/security",
            items: [
              { title: "Cognito", href: "/cognito" },
              { title: "IAM", href: "/iam" },
              { title: "KMS", href: "/kms" },
              { title: "WAF", href: "/waf" },
            ],
          },
          {
            title: "Serverless",
            href: "/serverless",
            items: [
              { title: "API Gateway", href: "/api-gateway" },
              { title: "DynamoDB", href: "/dynamodb" },
              { title: "Lambda Functions", href: "/lambda-functions" },
            ],
          },
          {
            title: "Storage",
            href: "/storage",
            items: [
              { title: "DynamoDB", href: "/dynamodb" },
              { title: "ElastiCache", href: "/elasticache" },
              { title: "RDS", href: "/rds" },
              { title: "S3", href: "/s3" },
            ],
          },
        ],
      },
      { title: "Computer Science", href: "/computer-science" },
      {
        title: "Databases",
        href: "/databases",
        items: [
          { title: "DynamoDB", href: "/dynamodb" },
          { title: "MongoDB", href: "/mongodb" },
          { title: "SQL Server", href: "/mssql" },
          { title: "PostgreSQL", href: "/postgresql" },
        ],
      },
      { title: "DevOps", href: "/devops" },
      { title: "Docker", href: "/docker" },
      { title: "Dotnet", href: "/dotnet" },
      { title: "Frameworks", href: "/frameworks" },
      { title: "Obsidian", href: "/obsidian" },
      {
        title: "Pet Projects",
        href: "/pet-projects",
        items: [
          { title: "avro-auth", href: "/avro-auth" },
          { title: "avro-autokit", href: "/avro-autokit" },
          { title: "avro-autosql", href: "/avro-autosql" },
          { title: "avro-cli", href: "/avro-cli" },
          { title: "avro-cron", href: "/avro-cron" },
          { title: "avro-docs", href: "/avro-docs" },
          { title: "avro-domain", href: "/avro-domain" },
          { title: "avro-fe", href: "/avro-fe" },
          { title: "avro-install", href: "/avro-install" },
          { title: "avro-kb", href: "/avro-kb" },
          { title: "avro-mcp", href: "/avro-mcp" },
          { title: "avro-roadmap", href: "/avro-roadmap" },
          { title: "avro-vscode", href: "/avro-vscode" },
          { title: "avro.cc", href: "/avro.cc" },
        ],
      },
      {
        title: "Programming Languages",
        href: "/programming-langs",
        items: [
          { title: "C#", href: "/csharp" },
          { title: "Go", href: "/golang" },
          { title: "JavaScript", href: "/javascript" },
          { title: "Python", href: "/python" },
          { title: "Rust", href: "/rust" },
          { title: "TypeScript", href: "/typescript" },
        ],
      },
      { title: "Software Architecture", href: "/software-architecture" },
      { title: "Software Design", href: "/software-design" },
      { title: "Testing", href: "/testing" },
    ],
  },
]
