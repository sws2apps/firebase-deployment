FROM node:18-slim
RUN npm i -g firebase-tools
COPY README.md LICENSE /
COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
