import { ref } from 'vue';
import type { Organisation} from '@/types/organisation';

export async function useFetch(search: string) {
  const data = ref([] as Organisation[]);
  const status = ref('idle');
  try {
    const response = await fetch(`http://localhost:3000/api/organisations?search=${search.toLowerCase()}`);
    const rawValue = await response.json();

    if (rawValue.length > 0) {
      data.value = rawValue.map((org: any) => {
        return {
          organisation: org["Organisation Name"],
          town: org["Town/City"],
        }
      });
    }
    
    status.value = 'success';
  } catch (error) {
    status.value = 'error';
    console.log(error);
  }
  return { data, status };
}