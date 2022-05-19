FROM node:18-slim@sha256:97964fc97863176612787e7f2042020f7c6b5606e71065f1e6d4d0ff219b27a6
RUN npm i -g firebase-tools@83e683693f53b8c76c6dc4113de136bfc7eac3f9
COPY README.md LICENSE /
COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
