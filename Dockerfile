FROM mcr.microsoft.com/playwright:v1.46.1-noble
WORKDIR /app
COPY . /app/
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    npm install && \
    npx playwright install