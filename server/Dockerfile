FROM python:3.12.2-alpine3.19
LABEL org.opencontainers.image.authors="abdullahmujahidali1@gmail.com"

ENV PYTHONUNBUFFERED 1

ENV PYTHONDONTWRITEBYTECODE=1.

RUN apk add --update --no-cache postgresql-client jpeg-dev && \
    apk add --update --no-cache --virtual .tmp-build-deps \
        build-base postgresql-dev musl-dev linux-headers

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt

WORKDIR /app
EXPOSE 8000

ARG DEV=false
RUN pip install -r /tmp/requirements.txt && \
    if [ "$DEV" = "true" ]; then pip install -r /tmp/requirements.dev.txt; fi && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

COPY ./app /app

ENV PATH="/py/bin:$PATH"

USER django-user
