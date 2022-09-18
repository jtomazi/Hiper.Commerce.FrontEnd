<template>
  <main>
    <slot>
      <b-modal id="modal-delete-user">
        <!-- HEADER MODAL -->
        <template #modal-header="{}">
          <h5>Excluir usuário</h5>
        </template>
        <!-- BODY MODAL -->
        <template #default="{}">
          <div v-show="messageError">
            <div
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <div>
                {{ messageError }}
              </div>
            </div>
          </div>
          <div>
            <p>Tem certeza que deseja <strong>excluir</strong> o usuário?</p>
          </div>
        </template>
        <!-- FOOTER MODAL -->
        <template #modal-footer="{ cancel }">
          <div>
            <b-button ref="Cancel" size="sm" @click="cancel()">
              Cancelar
            </b-button>
            <b-button size="sm" variant="danger" @click="deleteUser">
              Excluir
            </b-button>
          </div>
        </template>
      </b-modal>
    </slot>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      securityKey: "",
      messageError: ""
    };
  },
  methods: {
    deleteUser() {
      this.$store
        .dispatch("connectInAccount", this.securityKey)
        .then(res => {
          this.messageError = "";
          this.$refs.Cancel.click();
          this.$store.dispatch("getProducts");
        })
        .catch(erro => {
          this.messageError = erro;
        });
    }
  },
  computed: {
    ...mapGetters(["accountIsDefined"])
  }
};
</script>

<style>
.modal-footer {
  display: flex !important;
  justify-content: space-between !important;
}
</style>
