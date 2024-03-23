FROM python:3.12.2-alpine3.19
LABEL org.opencontainers.image.authors="abdullahmujahidali1@gmail.com"

ENV PYTHONUNBUFFERED 1

ENV PYTHONDONTWRITEBYTECODE=1.

COPY ./requirements.txt /tmp/requirements.txt

WORKDIR /app
EXPOSE 8000

RUN pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

COPY ./app /app


ENV PATH="/py/bin:$PATH"

USER django-user
