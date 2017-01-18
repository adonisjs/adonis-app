'use strict'

const Helpers = use('Helpers')
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Driver
  |--------------------------------------------------------------------------
  |
  | driver defines the default driver to be used for sending emails. Adonis
  | has support for 'mandrill', 'mailgun', 'smtp', 'ses' and 'log' driver.
  |
  */
  driver: Env.get('MAIL_DRIVER', 'smtp'),

  /*
  |--------------------------------------------------------------------------
  | SMTP
  |--------------------------------------------------------------------------
  |
  | Here we define configuration for sending emails via SMTP.
  |
  */
  smtp: {
    pool: true,
    port: 2525,
    host: '',
    secure: false,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD')
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  },

  /*
  |--------------------------------------------------------------------------
  | Mandrill
  |--------------------------------------------------------------------------
  |
  | Here we define api options for mandrill. Mail provider makes use of
  | mandrill raw api, which means you cannot set email body specific
  | options like template, tracking_domain etc.
  |
  */
  mandrill: {
    apiKey: Env.get('MANDRILL_APIKEY'),
    async: false,
    ip_pool: 'Main Pool'
  },

  /*
  |--------------------------------------------------------------------------
  | Amazon SES
  |--------------------------------------------------------------------------
  |
  | Here we define api credentials for Amazon SES account. Make sure you have
  | verified your domain and email address, before you can send emails.
  |
  */
  ses: {
    accessKeyId: Env.get('SES_KEY'),
    secretAccessKey: Env.get('SES_SECRET'),
    region: 'us-east-1',
    rateLimit: 10
  },

  /*
  |--------------------------------------------------------------------------
  | MailGun
  |--------------------------------------------------------------------------
  |
  | Here we define api credentials for Amazon SES account. Make sure you have
  | verified your domain and email address, before you can send emails.
  |
  */
  mailgun: {
    domain: Env.get('MAILGUN_DOMAIN'),
    apiKey: Env.get('MAILGUN_APIKEY')
  },

  /*
  |--------------------------------------------------------------------------
  | Log
  |--------------------------------------------------------------------------
  |
  | Log driver is mainly for testing your emails expectations. Emails are
  | written inside a log file, which can be used for inspection.
  |
  */
  log: {
    toPath: Helpers.storagePath('logs/mail.eml')
  }
}
