FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/MR-KALINDU/KALINDU-MD /root/MR-KALINDU/
WORKDIR /root/MR-KALINDU/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
