export default async function handler(req, res) {
  try {
    await res.unstable_revalidate('/isr-on-demand')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
