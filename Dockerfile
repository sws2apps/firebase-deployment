FROM node:18-slim
RUN npm i -g firebase-tools@83e683693f53b8c76c6dc4113de136bfc7eac3f9
COPY README.md LICENSE /
COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
