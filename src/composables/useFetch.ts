import { ref, watch, type Ref } from 'vue';
import type { Organisation } from '@/types/organisation';
import { debounce } from '@/utils/helpers';

export function useFetch(search: Ref<string>) {
  const data = ref([] as Organisation[]);
  const status = ref<string | null>(null);

  async function fetchData() {
    data.value = [];
    status.value = 'loading';

    try {
      const response = await fetch(`http://localhost:3000/api/organisations?search=${search.value}`);
      const rawValue = await response.json();
      if (rawValue.length > 0) {
        data.value = rawValue.map((org: any) => {
          return {
            organisation: org["Organisation Name"],
            town: org["Town/City"],
          }
        });
      } else {
        data.value = [];
      }
      status.value = 'success';
    } catch (error) {
      status.value = 'error';
    }
  }

  const debouncedSearch = debounce(fetchData, 500); 

  watch(search, () => {
    if (search.value.length > 0) debouncedSearch();
  });

  return { data, status };
}