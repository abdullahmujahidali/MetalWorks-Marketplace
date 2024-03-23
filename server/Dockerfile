FROM python:3.12.2-alpine3.19
LABEL abdullahmujahidali1@gmail.com

ENV PYTHONUNBUFFERED 1

ENV PYTHONDONTWRITEBYTECODE=1.

COPY ./requirements.txt /tmp/requirements.txt

WORKDIR /app
EXPOSE 8000

RUN pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user && \
    mkdir -p /vol/web/media && \
    mkdir -p /vol/web/static && \
    chown -R django-user:django-user /vol && \
    chmod -R 755 /vol && \

COPY ./app /app


ENV PATH="/py/bin:$PATH"

USER django-user
