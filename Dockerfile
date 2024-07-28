# Ubuntu base image
FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    build-essential \
    python3 \
    python3-pip \
    ffmpeg \
    imagemagick \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    libncursesw5-dev \
    xz-utils \
    tk-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libffi-dev \
    liblzma-dev \
    && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs
RUN npm install -g yarn pm2 typescript
RUN pip3 install --no-cache-dir \
    numpy \
    pandas \
    scikit-learn \
    tensorflow \
    pillow
WORKDIR /app
COPY package.json yarn.lock* ./
COPY . .
CMD ["/bin/bash"]

RUN git clone https://github.com/STAR-KING0/Queen_Alya /root/STAR-KING0
RUN npm cache clean --force
RUN rm -rf /root/STAR-KING0/node_modules
WORKDIR /root/STAR-KING0
RUN npm install
CMD ["npm","start" ]
