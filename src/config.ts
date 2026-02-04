if (process.env.NODE_ENV !== 'production') {
  await import('dotenv').then((dotenv) => dotenv.config())
}

export const PORT = process.env.PORT || 4000
