FROM verdaccio/verdaccio

USER root

RUN yarn add verdaccio-google-oauth-ui-2
COPY verdaccio.yaml /verdaccio/conf/config.yaml

USER verdaccio
