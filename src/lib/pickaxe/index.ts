import axios from 'axios';

export default class Pickaxe {
  public static async isCharacterExists(characterId: number): Promise<boolean> {
    const url = `https://jp.finalfantasyxiv.com/lodestone/character/${characterId}`;
    console.log(`fetching... ${url}`);
    try {
      const { status } = await axios.get(url);
      console.log(`status: ${status}`);
      return (status === 200);
    } catch (err) {
      if (err.response.status === 404) return false;
      throw err;
    }
  }
}

